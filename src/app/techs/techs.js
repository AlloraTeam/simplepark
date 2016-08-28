export default {
  templateUrl: 'src/app/techs/techs.html',
  controller: ['$http', TechsController]
};

function TechsController($http) {
  var vm = this;

  $http
    .get('src/app/techs/techs.json')
    .then(function (response) {
      vm.techs = response.data;
    });
}
