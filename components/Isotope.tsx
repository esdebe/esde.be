/* eslint-disable no-console */
import IsotopeLayout from 'isotope-layout'
import { useEffect, useState } from 'react'

function Isotope({ inputRef }) {
  //
  const [grid, setGrid] = useState<{ shuffle: Function, arrange: Function }>()

  useEffect(() => {
    const iso = new IsotopeLayout(inputRef.current, {
      itemSelector: '.grid-item',
      getSortData: {
        id: '[data-id]',
        order: '[data-order]',
      },
    })
    setGrid(iso)
  }, [inputRef])

  function triggerShuffle() {
    grid.shuffle()
  }

  function filterMe() {
    grid.arrange({
      filter: (itemElem) => (JSON.parse(itemElem.getAttribute('data-group'))).includes(3),
    })
  }

  function filterAll() {
    grid.arrange({
      filter: () => true,
    })
  }

  function sortById() {
    grid.arrange({
      sortBy: 'id',
    })
  }

  function sortByOrder() {
    grid.arrange({
      sortBy: 'order',
    })
  }

  return (
    <div>
      <button
        type="button"
        onClick={triggerShuffle}
        className="btn"
      >
        Shuffle
      </button>
      <button
        type="button"
        onClick={filterMe}
        className="btn"
      >
        Filter G 3
      </button>
      <button
        type="button"
        onClick={filterAll}
        className="btn"
      >
        Clear Filter
      </button>
      <button
        type="button"
        onClick={sortByOrder}
        className="btn"
      >
        By Order
      </button>
      <button
        type="button"
        onClick={sortById}
        className="btn"
      >
        By Id
      </button>
    </div>
  )
}

export default Isotope
