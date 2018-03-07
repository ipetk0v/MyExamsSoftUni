package com.example.user.a9gag;

public class Article {

    private String title;
    private String body;
    private String imgUrl;
    private boolean isLiked;

    public Article(String title, String body, String imgUrl) {
        this.title = title;
        this.body = body;
        this.imgUrl = imgUrl;
        this.isLiked = false;
    }

    public String getBody() {
        return body;

    }

    public String getImgUrl() {
        return imgUrl;
    }

    public boolean isLiked() {
        return isLiked;
    }

    public String getTitle() {
        return title;

    }

    public void setLiked() {
        this.isLiked = true;
    }
}
