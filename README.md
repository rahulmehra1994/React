
# React Image Upload Component
This repo contains the image upload component in react for selecting one or more image from the computer and displaying the selected ones on the screen in real time and you can cancel them too. Use them Enjoy.

## Screenshots
![1](https://user-images.githubusercontent.com/20178869/36057992-f975d19e-0e3c-11e8-9d7b-9dc691f9e30a.PNG)
- The component will look like Profile pic above on include.

![2](https://user-images.githubusercontent.com/20178869/36057993-00487b16-0e3d-11e8-9529-7dc73123a222.PNG)
- On selecting image/images from your computer the image/images will be displayed along side the file input box.
- The image/images can be removed by the cross sign adjacent to the image and can be re-selected from your computer.

## Usage

- Just download the imgUploadComp.js  
- Paste it in your src directory  
- Include the file  like: ```import ImgUploadComp from './your-directory/imgUploadComp';```
- Place it in your code like :
```<ImgUploadComp multiple={false} value={ (data, imgName) => {this.setState({base64Array: data, imgNameArray: imgName})} }/>```
- The image/images converted into base 64 code along with image name will be available as array in the value function like following:
```value={ (data, imgName) => {this.setState({base64Array: data, imgNameArray: imgName})} }```  

## Props  
```multiple={true} or multiple={false}```  
Makes the component to select nultiple images or select one image from user computer.   
