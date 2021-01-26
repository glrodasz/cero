import PropTypes from 'prop-types'
import { resetServerContext } from 'react-beautiful-dnd'

import PlanningContainer from '../features/planning/containers/PlanningContainer'

import tasksApi from '../features/planning/api'

export async function getStaticProps() {
  const tasks = await tasksApi.getAll()
  // FIXME: Evaluate when this resetServerContext is necessary.
  resetServerContext()
  return { props: { tasks } }
}

function Planning({ tasks }) {
  return <PlanningContainer initialData={tasks} />
}

Planning.propTypes = {
  tasks: PropTypes.array,
}

export default Planning
