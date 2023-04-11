

import "../style.css"

const Info = (props) => (
    <div className={props.class_property}>
<h1>{props.name}</h1>
<p>{props.descripttion}
</p>
    </div>
)

export default Info;