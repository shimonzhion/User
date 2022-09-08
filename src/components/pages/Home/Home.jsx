import "./Home.css";
import React from "react";
import MyForm from "../../featuers/MyForm/MyForm";
import { connect } from "react-redux";

const mapStateToProps=(state)=>{
  return { users: state.users };
}

function Home({users}) {
  return (
    <div className="home">
     
   <MyForm users={users}/>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
