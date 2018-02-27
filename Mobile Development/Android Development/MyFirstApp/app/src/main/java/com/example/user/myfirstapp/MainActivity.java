package com.example.user.myfirstapp;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;

import butterknife.BindView;
import butterknife.OnClick;

public class MainActivity extends AppCompatActivity {

    private String username;
    private boolean hasCreamTopping = false;
    private boolean hasChocolateTopping = false;
    private int coffeeCount = 0;

    @BindView(R.id.btn_order) Button btnOrder;
    @BindView(R.id.edit_username) EditText edtUsername;
    @BindView(R.id.chcb_chocolate) CheckBox checkBoxChocolate;
    @BindView(R.id.chcb_cream) CheckBox checkBoxCream;
    @BindView(R.id.text_count) TextView textCountCoffee;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    @OnClick(R.id.btn_less)
    public void onLessClicked(){
        this.coffeeCount = Integer.parseInt(textCountCoffee.getText().toString());
        coffeeCount--;
        textCountCoffee.setText(String.valueOf(coffeeCount));
    }

    @OnClick(R.id.btn_more)
    public void onMoreClicked(){
        this.coffeeCount = Integer.parseInt(textCountCoffee.getText().toString());
        coffeeCount++;
        textCountCoffee.setText(String.valueOf(coffeeCount));
    }

    @OnClick(R.id.btn_order)
    public void onOrderClicked(){
        this.username = edtUsername.getText().toString();
        this.hasChocolateTopping = checkBoxChocolate.isChecked();
        this.hasCreamTopping = checkBoxCream.isChecked();
        this.coffeeCount = Integer.parseInt(textCountCoffee.getText().toString());
        String orderText = "Hello from" + username + "\n Please get me " + coffeeCount + "coffees";

        if(hasCreamTopping){
            orderText += " Also add cream.";
        }
        if(hasChocolateTopping){
            orderText += " Also add chocolate";
        }

        Intent emailIntent = new Intent(Intent.ACTION_SEND);
        emailIntent.setType("*/*");
        emailIntent.putExtra(Intent.EXTRA_EMAIL, "coffee@gmail.com");
        emailIntent.putExtra(Intent.EXTRA_TEXT, orderText);
        startActivity(emailIntent);
    }


}
