import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../src/components/Sidebar'
import Content from '../src/components/Content'

const MainContainer = styled.div`
  border: 1px solid red;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`

const SidebarStyled = styled(Col)`
  background-color: #D8D8D8;
`
const ContentStyled = styled(Col)`
  background-color: #F3F3F3;
`
class App extends Component {
  constructor(){
    super();
    this.state = {
      notes : []
    }
  }

  componentDidMount(){
    this.setState({
      notes: [
        {
        "id": 1531765758224,  
        "tags": ["tag", "otherTag"],
        "title": "Doctor Who",
        "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
        },
        {  
          "id": 1531765765746,
          "tags": ["tag", "otherTag"],
          "title": "Doctor Who",
          "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
        },
        {  
          "id": 1531765766821, 
          "tags": ["tag", "otherTag"],
          "title": "Doctor Who",
          "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
        },
        {  
          "id": 1531765767659,
          "tags": ["tag", "otherTag"],
          "title": "Doctor Who",
          "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
        },
        {  
          "id": 1531765770689,
          "tags": ["tag", "otherTag"],
          "title": "Doctor Who",
          "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
        },
        {
          "id": 1531765758224,  
          "tags": ["tag", "otherTag"],
          "title": "Doctor Who",
          "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
          },
          {  
            "id": 1531765765746,
            "tags": ["tag", "otherTag"],
            "title": "Doctor Who",
            "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
          },
          {  
            "id": 1531765766821, 
            "tags": ["tag", "otherTag"],
            "title": "Doctor Who",
            "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
          },
          {  
            "id": 1531765767659,
            "tags": ["tag", "otherTag"],
            "title": "Doctor Who",
            "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
          },
          {  
            "id": 1531765770689,
            "tags": ["tag", "otherTag"],
            "title": "Doctor Who",
            "textBody": "You're a clumsy, ham fisted idiot! Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. Hello-o-o-o. It seems you have a very large rat Brigadier—maybe you should employ the services of a very large cat? You may be a doctor. But I'm the Doctor. The definite article, you might say. What?! Come out. And don't touch anything! Come on! It may be irrational of me, but human beings are my favorite species. Shut up, K-9! I might've been saying something important. I was saying something important! Would you like a jelly baby? Hello-o-o-o. I might've been saying something important. I was saying something important! Well, my Doctorate is purely honorary and Harry is only qualified to work on sailors. Well, of course I'm being childish! There's no point being grown-up if you can't be childish sometimes. You're standing on my scarf. What?! Come out. And don't touch anything! Shut up, K-9! Have a jelly baby. The trouble with computers, of course, is that they're very sophisticated idiots. They do exactly what you tell them at amazing speed. Even if you order them to kill you. So if you do happen to change your mind, it's very difficult to stop them from obeying the original order. But not impossible.",
          },
  
      ]
    })
  }

  render() {
    return (
      <MainContainer>
        <Container>
          <Row>
            <SidebarStyled md="3"><Sidebar/></SidebarStyled>
            <ContentStyled md="9"><Container><Content notes={this.state.notes}/></Container></ContentStyled>
          </Row>
        </Container>
      </MainContainer>
    );
  }
}

export default App;
