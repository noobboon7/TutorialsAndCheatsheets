import React from "react";

export default React.memo(({ cb }) => (
		<button className='button-refresh-colors' onClick={cb}>
			&#8634;
		</button>
))