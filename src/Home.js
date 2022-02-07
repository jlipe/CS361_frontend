import React from 'react'
import { Routes, Link } from 'react-router-dom'

const StockGame = () => {
    return (
        <div>
            <Routes>
                <Link to="/stocks">
                    <button type="button">
                        Stock Game
                    </button>
                </Link>
                <Link to="/headlines">
                    <button type="button">
                        Stock Game
                    </button>
                </Link>
            </Routes>
        </div>
    )
}

export default StockGame