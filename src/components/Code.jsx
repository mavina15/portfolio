import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react_syntax-highlighter/dist/esm/styles/prism";

function Code() {
	const [data, setData] = useState('')

	return (
		<div>
			<textarea onChange={(e) => setData(e.target.value)} />
			<SyntaxHighlighter language="javascript" style={dark}>
				{codeString}
			</SyntaxHighlighter>
		</div>

	)
}

export default DisplayCode;
