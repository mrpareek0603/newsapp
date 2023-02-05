import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import Category from './Category';
export class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 8,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    //first thing to run
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    handlePreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=397eedbcde7b400e9f2ef8307688dd3d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }
    handleNextClick = async () => {
        // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        // }
        // else {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=397eedbcde7b400e9f2ef8307688dd3d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
        // }
    }
    // runs after render method gets executed
    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=397eedbcde7b400e9f2ef8307688dd3d&page=1&pageSize=${this.props.pageSize}`;
    //     this.setState({ loading: true });
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    // }
    // runs aftyer constructor
    render() {

        return (
            <div className='container my-3'>
                {/* {this.state.loading && <Spinner />}
                <h2 style={{ margin: "40 0" }}>News4U - Top Headlines</h2>

                <div className='row' >
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element);
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title : ""}
                                description={element.description ? element.description :
                                    "There is no description for this news from the newsapi.org. Kindly click read more to read the news"}
                                imageUrl={element.urlToImage ? element.urlToImage :
                                    "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
                <h2>Sports</h2><Category category={"sports"}/>
                <h2>Business</h2><Category category={"business"}/>
                <h2>Technology</h2><Category category={"technology"}/>
            </div>
            
        )
    }
}

export default News