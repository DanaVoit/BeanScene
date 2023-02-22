function SectionHeader(props){
    return(
        <div className="section-header">
            <h2 className="section-title">{props.title}</h2>
            <p className="main-txt section-dscrpt">{props.dscrpt}</p>
        </div>
    )  
}

export {SectionHeader}

