import dynamic from 'next/dynamic'

const VTimeline = dynamic(() => import('./VTimeline.js'), {
    ssr: false
})

export default VTimeline