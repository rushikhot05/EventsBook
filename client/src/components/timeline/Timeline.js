import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom"

const Timeline = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/api/posts/allpost", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result=>{
            setData(result.posts)
        })
    }, [])

    return (
        <div className="home" style={{}}>
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id} style={{paddingLeft: "250px"}}>
                            <div className="row">
                                <b>
                                    {item.title}
                                </b>
                                <p>
                                    {item.caption}
                                </p>
                                <div className="card-image">
                                    <img src={item.photo} style={{maxWidth: "500px"}}/>
                                </div>
                                <a href={item.event_url} target="_blank">
                                <button 
                                    className="btn"
                                    style={{backgroundColor:"DodgerBlue",
                                            border: "None",
                                            color: "white",
                                            width:"500px",
                                            fontSize:"12px"}}
                                    ><i className="fa info-circle"></i>Interested? Click to know more!</button>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Timeline;