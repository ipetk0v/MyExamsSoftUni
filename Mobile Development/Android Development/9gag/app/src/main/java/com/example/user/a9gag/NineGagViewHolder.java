package com.example.user.a9gag;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class NineGagViewHolder extends RecyclerView.ViewHolder {

    @BindView(R.id.txt_title) TextView txtTitle;
    @BindView(R.id.txt_body) TextView txtBody;
    @BindView(R.id.img_article) ImageView imgArticle;
    @BindView(R.id.btn_like) Button btnLike;

    private Article dataItem;

    public NineGagViewHolder(View itemView) {
        super(itemView);
        ButterKnife.bind(this,itemView);
    }

    @OnClick(R.id.btn_like)
    public  void onLikeClicked(){
        btnLike.setEnabled(false);
        dataItem.setLiked();
    }

    public void setData(Article item) {
        this.dataItem = item;
        txtBody.setText(item.getBody());
        txtTitle.setText(item.getTitle());
        btnLike.setEnabled(!item.isLiked());
        Picasso.with(itemView.getContext()).load(item.getImgUrl()).into(imgArticle);
    }
}
