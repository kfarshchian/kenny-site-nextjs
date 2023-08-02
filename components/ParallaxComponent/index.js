import dynamic from 'next/dynamic'

const ParallaxComponent = dynamic(() => import('./ParallaxComponent.js'), {
    ssr: false
})

export default ParallaxComponent