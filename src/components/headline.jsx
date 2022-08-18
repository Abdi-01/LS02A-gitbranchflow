import React from "react";
import axios from "axios";

const API_URL = "https://newsapi.org/v2";

const Headline = (props) => {
    const [headNews, setHeadNews] = React.useState({});
    const [headSource, setHeadSource] = React.useState("");
    const [headPublished, setHeadPublished] = React.useState("");

    const [sideNews, setSideNews] = React.useState([]);
    const [bottomNews, setBottomNews] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            let getRes = await axios.get(API_URL + '/top-headlines?country=id', {
                headers: {
                    'Authorization': 'Bearer 82e0f058301e44c59c795c4425728677'
                }
            });

            const randomIdx = Math.floor(Math.random() * getRes.data.articles.length);
            const item = getRes.data.articles[randomIdx];
            
            //console.log(item.source.name)
            setHeadNews(item);
            setHeadSource(item.source.name);
            setHeadPublished(item.publishedAt.split("T")[0]);

            let temp = getRes.data.articles.splice(2, 4);
            setSideNews(temp);

            let temp2 = getRes.data.articles.splice(5, 5);
            setBottomNews(temp2);

        } catch (error) {
            console.log(error)
        }
    };

    const printSideNews = () => {
        return sideNews.map((val, idx) => {
            return (
                <div key={idx} className="d-flex flex-column my-2">
                    <div className="d-flex">
                        <img src={val.urlToImage} style={{ width: "150px", height: "100px" }} />
                        <div className="ms-2">
                            <div className="d-flex justify-content-between">
                                <span className="text-muted" style={{ fontSize: "12px" }}>{val.publishedAt.split("T")[0]}</span>
                                <span className="text-muted" style={{ fontSize: "12px" }}>10 min read</span>
                            </div>
                            <p style={{ fontSize: "13px", fontWeight: "700" }}>
                                {val.title}
                            </p>
                        </div>
                    </div>
                </div>
            )
        })
    };

    const printBottomNews = () => {
        return bottomNews.map((val, idx) => {
            return (
                <div key={idx} style={{ maxWidth: "200px" }}>
                    <img src={val.urlToImage} style={{ width: "200px", height: "125px" }} />
                    <div className="px-2">
                        <div className="d-flex justify-content-between">
                            <span className="text-muted" style={{ fontSize: "12px" }}>{val.publishedAt.split("T")[0]}</span>
                            <span className="text-muted" style={{ fontSize: "12px" }}>10 min read</span>
                        </div>
                        <p style={{ fontSize: "13px", fontWeight: "700" }}>{val.title}</p>
                    </div>
                </div>
            )
        })
    };

    return (
        <div className="container">
            <div className="row m-0">
                <div className="col-8">
                    <div className="w-100">
                        <span className="text-white p-1 fw-bold" style={{ backgroundColor: "red", position: "absolute", zIndex: "3" }}>Featured Story</span>
                        <img src={headNews.urlToImage} style={{ width: "53%", height: "460px", position: "absolute" }} />
                        <div className="text-white p-2" style={{ width: "53%", height: "200px", position: "absolute", top: "262px", backgroundColor: "rgba(0, 0, 0, 0.4", zIndex: "2" }}>
                            <div className="row m-0">
                                <div className="col-3">
                                    {headSource}
                                </div>
                                <div className="col-3">
                                    {headPublished}
                                </div>
                            </div>
                            <div className="mb-2">
                                <span className="fw-bold fs-5">{headNews.title}</span>
                            </div>
                            <div>
                                <span className="fs-6 fw-lighter">{headNews.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 py-2" style={{ height: "480px" }}>
                    {printSideNews()}
                </div>
            </div>
            <div className="row m-0">
                <div className="p-2">
                    <span className="fw-bold fs-5">Top Stories</span>
                    <div className="mt-2 d-flex justify-content-between">
                        {printBottomNews()}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Headline;