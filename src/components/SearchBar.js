import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    handleInputChange = (e) => {
        this.setState({ term: e.target.value })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        this.props.handleFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="container mx-auto mt-5 sm:mt-12 px-4">
                <div className="bg-red-600 shadow-lg p-6 rounded">
                    <form onSubmit={this.handleFormSubmit}>
                        <label className="sr-only" htmlFor="search">
                            Search Videos
                        </label>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full h-12 px-4 bg-red-700 border border-red-700 placeholder-gray-900 placeholder-opacity-25 rounded focus:border-red-600 focus:bg-white hover:border-red-500 transition-colors duration-300 focus:outline-none"
                            id="search"
                            value={this.state.term}
                            onChange={this.handleInputChange}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar
