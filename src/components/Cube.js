/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Spex130 (https://sketchfab.com/spex130)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/3d-print-code-cube-d6-kirby-planet-robobot-bf94641134e74ace8b1735350f2421d5
title: 3D Print - Code Cube D6 (Kirby Planet Robobot)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cube.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Cube000_MatcapMaterial_0.geometry} material={materials.MatcapMaterial} />
          </group>
          <group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Cube003_WhiteMaterial_0.geometry} material={materials.WhiteMaterial} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cube.gltf')