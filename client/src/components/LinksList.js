import React from 'react';
import {Link} from "react-router-dom";

export const LinksList = ({ links }) => {
	
	if (!links.length) {
		return <p>Links list is empty</p>
	}
	
	return (
		<table className="highlight" style={{marginTop: '20px'}}>
			<thead>
			<tr>
				<th>№</th>
				<th>Original link</th>
				<th>Shorted link</th>
				<th>Detail</th>
			</tr>
			</thead>
			
			<tbody>
			{ links.map(({ date, to, clicks, from, _id }, idx) => {
				
				if (from.length > 100) from = from.substring(0, 100) + '...';
				
				return (
					<tr key={idx}>
						<td>{idx + 1}</td>
						<td>{from}</td>
						<td>{to}</td>
						<td>
							<Link to={`/detail/${_id}`}>Open</Link>
						</td>
					</tr>
				);
			}) }
			</tbody>
		</table>
	);
};