/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, MouseEvent } from 'react'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Title from './Title'

function preventDefault(event: MouseEvent) {
  event.preventDefault()
}

export default function Deposits() {
  return (
    <Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </Fragment>
  )
}
