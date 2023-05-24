"use client";
import React, { useState } from "react";

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "" && name.trim() !== "") {
      const comment = {
        name,
        text: newComment,
        timestamp: new Date().toLocaleString()
      };
      setComments([...comments, comment]);
      setNewComment("");
      setName("");
    }
  };

  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Deixe seu comentário</h1>
        <div className="mb-4">
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Nome
              </label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome..."
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="comment">
                Comentário
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded"
                rows={4}
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Digite seu comentário..."
                required
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded mb-4">
              <p>
                <strong>{comment.name}</strong> - {comment.timestamp}: {comment.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentPage;

