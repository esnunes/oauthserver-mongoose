# oauthserver-mongoose

A [node-oauth2-server](https://github.com/thomseddon/node-oauth2-server) mongoose-based model.

## Usage

   const mongoose = require('mongoose');
   const OAuth2Server = require('oauth2-server');
   const OAuthServerMongoose = require('oauthserver-mongoose');
   
   // All options are optional. If you have different model
   // names to want to use, like your own "User" collection, you can 
   // override the default model names here
   const model = OAuthServerMongoose.model(mongoose, {
       accessToken : 'OAuth2AccessToken', 
       authorizationCode, 'OAuth2AuthorizationCode', 
       client, 'OAuth2Client'
       refreshToken, 'OAuth2RefreshToken',
       user, 'OAuth2User'
   });

## Notes

- This model considers that access tokens generated on **client credentials** flow have no user information;
