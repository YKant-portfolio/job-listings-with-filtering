import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'store/positions/positions-selectors';
import { selectFilters } from 'store/filters/filter-selector';

import { addFilter } from 'store/filters/filter-actions';

const JobList = () => {
	const dispatch = useDispatch();
	const currentFilters = useSelector(selectFilters)
	const positions = useSelector((state) =>
		selectVisiblePositions(state, currentFilters)
	);

	const handelAddFilter = (filter) => {
		dispatch(addFilter(filter))
	};

	return (
		<div className='job-list'>
			{positions.map(item => (
				<JobPosition
					key={item.id}
					{...item}
					handelAddFilter={handelAddFilter}
				/>
			))}
		</div>
	)
}

export { JobList };