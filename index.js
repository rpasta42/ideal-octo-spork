server = 'http://forty7.guru/assmilk'

function Chatter(name, color) {
   this.name = name;
   this.color = color;
   this.mkMsg = function(msg) {
      return {
         'name'   : this.name,
         'color'  : this.color,
         'msg'    : msg
      };
   }
   return this;
}

var app = angular.module('messanger', []);

app.controller('messages', function($scope, $http) {

   var p1 = new Chatter('KungfuNinja', '#E96B20');
   var p2 = new Chatter('slowCheeta', '#46AEFB');
   var p3 = new Chatter('MrTurtle', '#FFFF00');
   var p4 = new Chatter('PhoenixDown', '#00FF00');

   $scope.messageInputValue = 0;

   //$scope.setUser(
   $scope.chat2 = [
      p1.mkMsg('Sup dude'),
      p2.mkMsg('Yo, what it do homie'),
      p1.mkMsg('nm just swagging you know how it b dawg'),
      p2.mkMsg('werd'),
      p1.mkMsg('tru'),
      p3.mkMsg('Kawabunga'),
      p4.mkMsg('Sup bros')
   ];

   $scope.chat = [
      p1.mkMsg('Hello'),
      p2.mkMsg('Hey what\'s up'),
      p1.mkMsg('Not much, what about you'),
      p2.mkMsg('true'),
      p1.mkMsg('ok'),
      p3.mkMsg('Kawabunga'),
      p1.mkMsg('what?? who are you?'),
      p3.mkMsg('I invade your chat'),
      p1.mkMsg('Ok'),
      p3.mkMsg('Anyone still here?')
   ];

   $scope.sendMessage = function() {
      msg = p1.mkMsg($scope.messageValue);
      $scope.messageValue = '';
      $scope.chat.push(msg);
      //$http.get(url).then(function(response))
      function onPost(res) {
         alert(response);
      }
      $http.post(server, {'msg':msg}).then(onPost);
   }

});
