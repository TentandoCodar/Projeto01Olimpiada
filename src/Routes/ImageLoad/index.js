import React, {useState} from 'react';

import './index.css'

export default function ImageLoad(){
    const [load, setLoad] = useState(false);

    const handleLoad = () => {
        setTimeout(() => {
            console.log("321")
            setLoad(true)
        },5000)
        
    
        
        
    }

    return (
        <div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
            <div className="BackgroundImage">
                <img className={load ? 'Img' : 'NotImage'} src="https://images4.alphacoders.com/936/thumb-1920-936867.jpg" onLoad={() => {
                    handleLoad();
                }}></img>
                
                
            </div>
        </div>
        
    )
}