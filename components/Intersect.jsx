import { useIntersection } from 'react-use'
import { useEffect/* , useRef */ } from 'react'

function Intersect({ targetRef, onChange }) {
  // const intersected = useRef(false)
  const intersection = useIntersection(targetRef, {
    root: document.querySelector('#cont'),
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
  })

  useEffect(() => {
    if (intersection && intersection.intersectionRatio <= 0) {
      onChange(intersection)
    }
  }, [intersection, onChange])

  return null
}

export default Intersect
