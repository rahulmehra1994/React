import React from 'react';
var $ = require("jquery");

export default class ImgUploadComp extends React.Component{

	constructor(props){
		super(props);
		this.state={ base64Send: [], base64Full: [], ImgNameArray: [] };

	}


	componentDidMount(){
	}

	base64() {

		if(this.props.multiple === false){
			this.state.base64Send = [];
			this.state.base64Full = [];
			this.state.ImgNameArray = [];
			// this.setState({base64Send: [], base64Full: [], ImgNameArray: []});
		}

		var filesSelected = document.getElementById("file").files; // this is equal to $(\"#fileAdd\")[0].files
		var readFile = "";
		var fileReader = [];
		console.log(filesSelected);

		if (filesSelected.length > 0){
			for (var i = 0; i < filesSelected.length; i++){

				if(this.state.ImgNameArray.length < 1){
			
					this.state.ImgNameArray.push(filesSelected[i].name);
				
					fileReader[i] = new FileReader();
					fileReader[i].readAsDataURL(filesSelected[i]);
					fileReader[i].addEventListener("load",  (data) => {
						readFile = data.target.result; // <--- data: base64
						var base64Split = readFile.split(","); //splitting to get the base 64 data from the string present on index 1
						this.state.base64Send.push(base64Split[1]);
						this.state.base64Full.push(readFile);
						this.forceUpdate();
						}, false);

				}else{
					
					if(this.state.ImgNameArray.indexOf(filesSelected[i].name) === -1){
				
						this.state.ImgNameArray.push(filesSelected[i].name);

						fileReader[i] = new FileReader();
						fileReader[i].readAsDataURL(filesSelected[i]);
						fileReader[i].addEventListener("load",  (data) => {
							readFile = data.target.result; // <--- data: base64
							var base64Split = readFile.split(","); //splitting to get the base 64 data from the string present on index 1
							this.state.base64Send.push(base64Split[1]);
							this.state.base64Full.push(readFile);
							this.forceUpdate();
							}, false);
					}

				}


			}



		// console.log(this.state.base64Send);

		this.props.value(this.state.base64Send, this.state.ImgNameArray);

		}
		else{
			$(".uploadedImg").html("");
		}
	}
	
	fileReset(index){
		
		document.getElementById("file").value = "";
		this.state.ImgNameArray.splice(index, 1);
		this.state.base64Full.splice(index, 1);
		this.state.base64Send.splice(index, 1);
		this.setState({base64Full: this.state.base64Full, base64Send: this.state.base64Send, ImgNameArray: this.state.ImgNameArray});
		this.props.value(this.state.base64Send, this.state.ImgNameArray);
	}



	render(){

		return(
			<div>
		
				<div className="upload">
					<input id="file" onChange={() => { this.base64() } } type="file" title=" " multiple={this.props.multiple}/>
				</div>
			
				<div className="float_lt uploadedImgWrap">



					{
						(this.props.img !== undefined && this.props.multiple === false && this.state.base64Full.length < 1)?
							<div className="uploadedImg">
								<img className="earlierImg" src={this.props.dynamicUrls.profileImage + this.props.img}/>
								{/*<span className="form_img_cancel cursor"> &times; </span>*/}
							</div>
						:
							null
					}


					{
						(this.state.base64Full.length > 0)? 
							this.state.base64Full.map((item, index)=>{
								return(
									<div key={'uploadImgId'+index} className="uploadedImg" title={this.state.ImgNameArray[index]}>
										<img className="earlierImg" src={item}/>
										<span onClick={ ()=> this.fileReset(index)} className="form_img_cancel cursor"> &times; </span>
									</div>
								)
							})
						:
							null
					}
				</div>



			</div>	

			);
	}
}

