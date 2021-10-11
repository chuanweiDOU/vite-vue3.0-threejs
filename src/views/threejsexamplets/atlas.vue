<template>
  <!-- <div>
    {{ atals }}
  </div> -->
  <div id="threejs" ref="threejs"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {
  Scene,
  PerspectiveCamera,
  Group,
  BoxHelper,
  Mesh,
  BoxGeometry,
  AdditiveBlending,
  PointsMaterial,
  BufferGeometry,
  Vector3,
  BufferAttribute,
  DynamicDrawUsage,
  Points,
  LineBasicMaterial,
  LineSegments,
  WebGLRenderer,
  sRGBEncoding
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import Stats from 'three/examples/jsm/libs/stats.module'
// import * as THREE from 'three'
interface particlesDataInterface {
  velocity: Vector3;
  numConnections: number;
}

const atals = ref('3d图谱')
const threejs = ref()
// 性能监控
let stats = new Stats()
// boxhelp x y z
const r = 800
const maxParticleCount = 1000
let positions: Float32Array
let colors: Float32Array
let particles: BufferGeometry
let particlePositions: Float32Array
let pointCloud: Points
let linesMesh: LineSegments
let particleCount = 500
let camera: PerspectiveCamera
let controls: OrbitControls
let scene: Scene
let group: Group
let renderer: WebGLRenderer
let rHalf = r / 2
let particlesData: Array<particlesDataInterface> = []

let effectController = {
  showDots: true,
  showLines: true,
  minDistance: 150,
  limitConnections: false,
  maxConnections: 20,
  particleCount: 500
}


const onWindowResize = () => {
    // 浏览器窗口发生变化，theejs 画布实时适应变化
		camera.aspect = window.innerWidth / window.innerHeight
    // 相机更新函数
		camera.updateProjectionMatrix()
    // 渲染画布计算宽高
		renderer.setSize( window.innerWidth, window.innerHeight )

}

// 控制ui
const initGui = () => {
  const gui = new GUI()
  // 点控制属性隐藏显示
  gui.add( effectController, 'showDots').onChange( function (value: boolean) {
    pointCloud.visible = value
  })
  // 线控制属性 隐藏显示
  gui.add(effectController, 'showLines').onChange(function (value: boolean) {
    linesMesh.visible = value
  })
  // 线的浓密度
  gui.add( effectController, "minDistance", 10, 300 )
  // 线点跳跃式显示
	gui.add( effectController, "limitConnections" )
  // 渲染周期一次显示隐藏最大条数线
	gui.add( effectController, "maxConnections", 0, 30, 1 )
  // 点的个数
	gui.add( effectController, "particleCount", 0, maxParticleCount, 1 ).onChange( function ( value: any ) {
	  particleCount = parseInt( value )
	  particles.setDrawRange( 0, particleCount )
	})

}

// 初始创建相机 场景 控制器
const init = () => {
  // 创建相机
  camera = new PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 4000)
  camera.position.z = 1750
  controls = new OrbitControls(camera, threejs.value)
  controls.minDistance = 1000
  controls.maxDistance = 3000
  scene = new Scene()
  group = new Group()
  scene.add(group)
  let helper: any = new BoxHelper(new Mesh( new BoxGeometry(r, r, r) ))
  helper?.material?.color?.setHex(0x101010)
  helper.material.blending = AdditiveBlending
  helper.material.transparent = true
  group.add(helper)

  let segments = maxParticleCount * maxParticleCount
  positions = new Float32Array( segments * 3 )
  colors = new Float32Array( segments * 3 )
  let pMaterial = new PointsMaterial({
    color: 0xFFFFFF,
    size: 3,
    blending: AdditiveBlending,
    transparent: true,
    sizeAttenuation: false
  })
  particles = new BufferGeometry()
  particlePositions = new Float32Array( maxParticleCount * 3 )

  for (let i: number = 0; i < maxParticleCount; i++) {
    const x = Math.random() * r - r / 2
    const y = Math.random() * r - r / 2
    const z = Math.random() * r - r / 2

    particlePositions[i * 3] = x
    particlePositions[i * 3 + 1] = y
    particlePositions[i * 3 + 2] = z

    particlesData.push({
      velocity: new Vector3(-1 + Math.random() * 2, -1 + Math.random() * 2, -1 + Math.random() * 2),
      numConnections: 0
    })
  }

  particles.setDrawRange( 0, particleCount )
  particles.setAttribute( 'position', new BufferAttribute( particlePositions, 3).setUsage(DynamicDrawUsage))
  // 创建点
  pointCloud = new Points( particles, pMaterial)
  group.add(pointCloud)

  // 创建线的描述
  const geometry = new BufferGeometry()
  geometry.setAttribute('position', new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage))
  geometry.setAttribute('color', new BufferAttribute( colors, 3 ).setUsage(DynamicDrawUsage))
  
  geometry.computeBoundingSphere()
  geometry.setDrawRange(0, 0)
  // 创建线的材质
  const material = new LineBasicMaterial({
    vertexColors: true,
    blending: AdditiveBlending,
    transparent: true
  })
  linesMesh = new LineSegments( geometry, material )
  group.add(linesMesh)

  // 创建渲染器
  renderer = new WebGLRenderer({ antialias: true })
  renderer.setPixelRatio( window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerWidth)
  renderer.outputEncoding = sRGBEncoding

  threejs.value.appendChild(renderer.domElement)
  threejs.value.appendChild(stats.dom)
}

// 帧渲染器
let render = () => {
  const time = Date.now() * 0.001

  group.rotation.y = time * 0.1
  renderer.render( scene, camera )

}
const animate = () => {

				let vertexpos = 0
				let colorpos = 0
				let numConnected = 0

				for ( let i = 0; i < particleCount; i ++ )
					particlesData[ i ].numConnections = 0

				for ( let i = 0; i < particleCount; i ++ ) {

					// get the particle
					const particleData = particlesData[ i ]

					particlePositions[ i * 3 ] += particleData.velocity.x
					particlePositions[ i * 3 + 1 ] += particleData.velocity.y
					particlePositions[ i * 3 + 2 ] += particleData.velocity.z

					if ( particlePositions[ i * 3 + 1 ] < - rHalf || particlePositions[ i * 3 + 1 ] > rHalf )
						particleData.velocity.y = - particleData.velocity.y

					if ( particlePositions[ i * 3 ] < - rHalf || particlePositions[ i * 3 ] > rHalf )
						particleData.velocity.x = - particleData.velocity.x

					if ( particlePositions[ i * 3 + 2 ] < - rHalf || particlePositions[ i * 3 + 2 ] > rHalf )
						particleData.velocity.z = - particleData.velocity.z

					if ( effectController.limitConnections && particleData.numConnections >= effectController.maxConnections )
						continue

					// Check collision
					for ( let j = i + 1; j < particleCount; j ++ ) {

						const particleDataB = particlesData[ j ]
						if ( effectController.limitConnections && particleDataB.numConnections >= effectController.maxConnections )
							continue

						const dx = particlePositions[ i * 3 ] - particlePositions[ j * 3 ]
						const dy = particlePositions[ i * 3 + 1 ] - particlePositions[ j * 3 + 1 ]
						const dz = particlePositions[ i * 3 + 2 ] - particlePositions[ j * 3 + 2 ]
						const dist = Math.sqrt( dx * dx + dy * dy + dz * dz )

						if ( dist < effectController.minDistance ) {

							particleData.numConnections ++
							particleDataB.numConnections ++

							const alpha = 1.0 - dist / effectController.minDistance

							positions[ vertexpos ++ ] = particlePositions[ i * 3 ]
							positions[ vertexpos ++ ] = particlePositions[ i * 3 + 1 ]
							positions[ vertexpos ++ ] = particlePositions[ i * 3 + 2 ]

							positions[ vertexpos ++ ] = particlePositions[ j * 3 ]
							positions[ vertexpos ++ ] = particlePositions[ j * 3 + 1 ]
							positions[ vertexpos ++ ] = particlePositions[ j * 3 + 2 ]

							colors[ colorpos ++ ] = alpha
							colors[ colorpos ++ ] = alpha
							colors[ colorpos ++ ] = alpha

							colors[ colorpos ++ ] = alpha
							colors[ colorpos ++ ] = alpha
							colors[ colorpos ++ ] = alpha

							numConnected ++

						}

					}

				}


				linesMesh.geometry.setDrawRange( 0, numConnected * 2 )
				linesMesh.geometry.attributes.position.needsUpdate = true
				linesMesh.geometry.attributes.color.needsUpdate = true

				pointCloud.geometry.attributes.position.needsUpdate = true

				requestAnimationFrame( animate )
        stats.update()
				render()

			}

onMounted(() => {
  initGui()
  init()
  window.addEventListener('resize', onWindowResize)
  animate()
})

</script>
