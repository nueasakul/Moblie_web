let commentCount = 2;
function addComment(){
    const input = document.getElementById("commentInput");
    const text = input.value.trim();
    if(text === "") return;
    const commentList = document.getElementById("commentList");
    const newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = `
        <div class="avatar"></div>
        <div class="comment-content">
            <div class="comment-header">
                <span class="name">Anonymous 00${commentCount}</span>
                <span class="time">Just now</span>
            </div>
            <p>${text}</p>
        </div>
    `;
    commentList.appendChild(newComment);
    input.value = "";
    commentCount++;
}