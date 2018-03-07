package com.example.user.a9gag;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.List;

class NineGagAdapter extends RecyclerView.Adapter<NineGagViewHolder>{
    private List<Article> data;

    public NineGagAdapter(List<Article> data) {
        this.data = data;
    }

    @Override
    public NineGagViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_article, parent, false);

        NineGagViewHolder vh = new NineGagViewHolder(view);
        return vh;
    }

    @Override
    public void onBindViewHolder(NineGagViewHolder holder, int position) {
        Article item = data.get(position);
        ((TextView)holder.itemView.findViewById(R.id.txt_title)).setText(item.getTitle());
        holder.setData(item);
    }

    @Override
    public int getItemCount() {
        return data.size();
    }
}
