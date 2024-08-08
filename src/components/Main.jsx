import "./Main.css";




export default function Main({para,icon,line,}) {
    return (
        <div className="main">
          {/* <div> */}
            
            <span className="border">
              <i className={icon}aria-hidden="true"></i>
            </span>

            <span className="border">
              {line}
            </span>

            <span className="border">
              {para}
            </span>

          {/* </div> */}
        </div>
    )
}