package com.example.root.mindmindsmentorship;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class WebAppInterface extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_app_interface);
        WebView myWebView = (WebView) findViewById(R.id.webview);
        myWebView.loadUrl("https://mentor-mentee-app.herokuapp.com/");
    }
}
