import React, { useState, useEffect } from 'react'
import './App.css'

const fetch = require('node-fetch')

function App () {
  const [images, setImages] = useState([]) // 今なんの写真が表示されてるか、その状態を管理する
  const [text, setText] = useState('') // 検索バーに入れる文字列の状態を管理
  const [query, setQuery] = useState('') // 今なんの文字列で検索してるかを保持する
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}` // データ取得、アクセスキーは環境変数にしてる
    )
      .then(response => response.json()) // responseオブジェクトが返ってくるからそれをjsonデータにする
      .then(data => {
        setImages(data.results) // 取ってきたデータをImagesに入れる
      })
  }, [query]) // 第二引数にqueryをセットする、これによりqueryの値が変更された時にuseEffectが走る。

  const onSubmit = e => {
    e.preventDefault() // 画面遷移を防ぐ
    setQuery(text) // 引数にinputタグに入れられたのを入れるからtext
    setText('') // まっさらにまた戻す
  }

  return (
    <div className='App'>
      <div className='main'>
        <form onSubmit={onSubmit}>
          <label>Image search</label>
          <input
            type='text'
            onChange={e => setText(e.target.value)} // e.target.valueでinputの値を取得できる
            value={text}
            placeholder='Please enter'
          />
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className='container'>
        {images.map((
          image // 繰り返し処理
        ) => (
          <div key={image.id} className='card'>
            <img src={image.urls.regular} className='card-img' alt='' />
            <div className='card-content'>
              <div className='card-title'>{image.alt_description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
