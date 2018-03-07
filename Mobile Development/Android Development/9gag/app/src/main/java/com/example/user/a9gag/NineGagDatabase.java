package com.example.user.a9gag;

import java.util.Arrays;
import java.util.List;

public class NineGagDatabase {

    private static List<Article> database;

    public static List<Article> getDatabase(){
        if(database == null){
            database = generateData();
        }
        return database;
    }

    private static List<Article> generateData() {
        return Arrays.asList(
                new Article("First article",
                        "This is my first article in this app",
                        "https://images.qclabels.com/img/lg/L/First-Article-Fluorescent-Label-LB-1916_rs-fl-or.gif"),
                new Article("Second article",
                        "This is my second article in this app",
                        "https://images.qclabels.com/img/lg/L/First-Article-Fluorescent-Label-LB-1916_rs-fl-or.gif"),
                new Article("Third article",
                        "This is my Third article in this app",
                        "https://images.qclabels.com/img/lg/L/First-Article-Fluorescent-Label-LB-1916_rs-fl-or.gif"),
                new Article("Fourth article",
                        "This is my fourth article in this app",
                        "https://images.qclabels.com/img/lg/L/First-Article-Fluorescent-Label-LB-1916_rs-fl-or.gif")
        );
    }
}
