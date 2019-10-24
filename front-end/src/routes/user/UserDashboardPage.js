import React, { Component } from "react";
import axios from "axios"
import TechnicalQuestionsPage from "../website/TechnicalQuestionsPage";

export default class UserDashboardPage extends Component {
 render() {
   return (
     <div>
       <h1>User Dashboard</h1>
       <button onClick={this.props.getUserPosts}>Get Posts</button>
       <button onClick={this.props.getUserComments}>Get Comments</button>
       <h1>Posts</h1>
       <table>
         <thead>
           <tr>
             <th>Question</th>
             <th>Answer</th>
             <th>Field</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           {this.props.posts.map(post => {
             return (
               <tr>
                 <td>{post.question}</td>
                 <td>{post.answer}</td>
                 <td>{post.field}</td>
                 <td><button onClick={() => this.props.deleteUserPost(post._id)}>X</button></td>
               </tr>)
           })}
         </tbody>
       </table>
       <br />
       <h1>Comments</h1>
       <table>
         <thead>
           <tr>
             <th>Comment</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           {this.props.comments.map(comment => {
             return (<tr>
               <td>{comment.comment}</td>
               <td><button onClick={() => this.props.deleteUserComment(comment._id)}>X</button></td>
             </tr>)
           })}
         </tbody>
       </table>
     </div>
   );
 }
}