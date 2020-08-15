import 'dart:ui';

import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        title: "Auth",
        home: Home(),
      ),
    );

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: MediaQuery.of(context).size.width,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF51486F), Color(0xFF4479B8)],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: ListView(
          children: <Widget>[
            Column(
              children: <Widget>[
                SizedBox(
                  height: 60,
                ),
                Image.asset(
                  'assets/images/logo-home.png',
                  height: 90,
                ),
                SizedBox(
                  height: 50,
                ),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 48, vertical: 8),
                  child: Flex(
                    direction: Axis.horizontal,
                    children: <Widget>[
                      Text(
                        "E-mail",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  width: 320,
                  height: 50,
                  child: TextField(
                    style: TextStyle(color: Colors.grey, fontSize: 20),
                    cursorColor: Colors.white,
                    decoration: InputDecoration(
                      contentPadding: EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 5,
                      ),
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ),
                SizedBox(
                  height: 30,
                ),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 48, vertical: 8),
                  child: Flex(
                    direction: Axis.horizontal,
                    children: <Widget>[
                      Text(
                        "Password",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 16,
                        ),
                      ),
                    ],
                  ),
                ),
                Container(
                  width: 320,
                  height: 50,
                  child: TextField(
                    obscureText: true,
                    style: TextStyle(color: Colors.grey, fontSize: 20),
                    cursorColor: Colors.white,
                    decoration: InputDecoration(
                      contentPadding: EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 5,
                      ),
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(10),
                      ),
                    ),
                  ),
                ),
                Flex(
                  direction: Axis.horizontal,
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 50,
                        vertical: 10,
                      ),
                      child: Text(
                        "Forgot password?",
                        style: TextStyle(color: Colors.white, fontSize: 15),
                      ),
                    )
                  ],
                ),
                Container(
                  margin: EdgeInsets.only(top: 10),
                  height: 50,
                  width: 320,
                  child: RaisedButton(
                    padding: EdgeInsets.all(0),
                    onPressed: () {},
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                    child: Ink(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10),
                        gradient: LinearGradient(
                          colors: [
                            Color(0xFFFD6152),
                            Color(0xFFFA717F),
                          ],
                          begin: Alignment.centerLeft,
                          end: Alignment.centerRight,
                        ),
                      ),
                      child: Container(
                        constraints: BoxConstraints(
                          maxWidth: 320.0,
                          minHeight: 50.0,
                        ),
                        alignment: Alignment.center,
                        child: Text(
                          "Sign Up",
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 17,
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                Flex(
                  direction: Axis.horizontal,
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    SizedBox(
                      height: 80,
                    ),
                    Text(
                      "Don't have an account? Sign Up",
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: FontWeight.w700,
                      ),
                    )
                  ],
                ),
              ],
            )
          ],
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        child: Text(''),
        color: Color(0xFF2861a8),
      ),
    );
  }
}
// https://proandroiddev.com/flutter-material-design-using-scaffold-appbar-body-bottom-navigation-floating-action-f84d71e68c76
//https://medium.com/flutterpub/create-gradient-on-button-in-flutter-cad65b8b3da4
// https://stackoverflow.com/questions/54307673/flutter-textfield-background-color-on-focus/54308248
// https://medium.com/codespace69/flutter-css-flexbox-vs-flutter-rows-and-columns-ff15ee07d0b8
