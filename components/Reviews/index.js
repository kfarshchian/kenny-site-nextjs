import dynamic from 'next/dynamic'

const Reviews = dynamic(() => import('./Reviews.js'), {
    ssr: false
})

export default Reviews