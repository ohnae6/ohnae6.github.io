(function(window, angular, undefined){
	'use strict';
	var app = angular.module('directive',['common']);
	app.directive('kaisaHeader',[function(){
		return {
			template: '<div id="header">'+
				'<div class="wrapper">'+
					'<h1><a href="/"><img src="/img/common/logo.png" alt="" /></a></h1>'+
				'</div>'+
			'</div>',
			replace: true,
			link: function($scope, el, attrs){
			}
		}
	}]);
	app.directive('kaisaMenu',[function(){
		return {
			template: '<div id="menu">'+
				'<div class="wrapper">'+
					'<ul>'+
						'<li><a href="javascript:alert(\'준비중입니다\')">이용안내</a></li>'+
						'<li><a href="javascript:alert(\'준비중입니다\')">요금표</a></li>'+
						'<li><a href="javascript:alert(\'준비중입니다\')">갤러리</a></li>'+
					'</ul>'+
				'</div>'+
			'</div>',
			replace: true,
			link: function($scope, el, attrs){
			}
		}
	}]);
	app.directive('kaisaFooter',[function(){
		return {
			template: '<div id="footer"><div class="wrapper">'+
				'<p>상호 : 평택콜밴(행복콜밴), 전화 : 010-3338-0101 <br />'+
				'사업자등록번호 : 350-53-00425(간이과세자) , 주소 : 경기도 평택시 세교상가 2길 (세교동)<br />'+
				'<span class="copy">copyright (c) 2018 PT Call. all right reserved</span>'+ //<b data-ng-click="admin.layer.open()">..</b></p>
				//'<p data-ng-if="admin.user" class="admin"><span data-ng-click="admin.logout()">관리자 로그아웃</span></p>'+
				/* 김춘옥 경기 68사 6269 email : 7083620@hanmail.net*/
			'</div></div>',
			replace: true,
			link: function($scope, el, attrs){
			}
		}
	}]);
	app.directive('onlyNumber',['kaisaRegex',function(kaisaRegex){ //only-number="false" => '.-'
	    return {
	    	require: 'ngModel',
	        link: function($scope, element, attrs, ctrl) {
	        	ctrl.$parsers.push(function (inputValue) {
	                var transformedInput = inputValue ? ((attrs.onlyNumber == 'true') ? inputValue.replace(/[^\d]/g,'') : inputValue.replace(/[^\d.-]/g,'')) : null;
	                if (transformedInput != inputValue) {
	                	ctrl.$setViewValue(transformedInput);
	                	ctrl.$render();
	                }
	                return transformedInput;
	            });
	        }
	    };
	}]);
	app.directive('icoHelp',[function(){
    	return {
    		replace : true,
    		link: function($scope, el, attrs){
    			el.on('mouseover',function(e){
    				if(el.find('.layer') && el.find('.layer').text().length > 10){
    					$scope.help.html = el.find('.layer').html();
        				$scope.help.active = true;
        				$scope.help.html = el.find('.layer').html();
        				$scope.help.style = {
        					left : e.pageX,
        					top : e.pageY
        				};
        				$scope.$apply();
    				}
    			});
    			el.on('mouseout',function(e){
    				$scope.help.active = false;
    				$scope.$apply();
    			});
    		}
    	}
    }]);
	app.directive('ngSrc',[function () {
		return {
			scope : false,
			link: function($scope, el, attrs){
				if(attrs.ngSrc && attrs.ngSrc.search($scope.image.host) < 0){
					console.log('%c ' + attrs.ngSrc + ' %c ( {{image.host}} 를 넣어주세요. )','color:#ffc382;','color:#ff9625;');
				}
				if(!attrs.loader){
					return false;
				}
				el.hide().parent().append('<div class="imgLoader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
				var loopCount = 0;
				el.on('error', function() {
					loopCount++;
					if(loopCount > 1){
						el.off('error');
					}
					el.attr('src', $scope.image.host + $scope.image.noImage);
					el.parent().find('.imgLoader').fadeOut(500);
				});
				if(attrs.ngSrc == null || attrs.ngSrc == ''){
					el.attr('src', $scope.image.host + $scope.image.noImage);
				}
				el.load(function(){
					setTimeout(function(){
						el.fadeIn(500).parent().find('.imgLoader').remove();
					},500);
				});
			}
		}
	}]);
	//byte check (required model)
	app.directive('maxByte',[function(){
	    return {
			require: 'ngModel',
	        link : function($scope, el, attrs, ctrl){
	        	attrs.$set("ngTrim", "false");
                var sup = 0,maxByte = parseInt(attrs.maxByte);
                var clen=0;
                var check = true;
                var getFocus = function(){
                    check = true;
                }
                ctrl.$parsers.push(function (value) {
                	var ibyte = 0;
                	for (var i = 0; i < value.length; i++) {
    					var tmp = escape(value.charAt(i));
    					if (tmp.length == 1) ibyte++;
    					else if (tmp.indexOf("%u") != -1) ibyte += 3;
    					else if (tmp.indexOf("%") != -1) ibyte += tmp.length/3;
    					if( ibyte <= maxByte){
    						clen = i+1;
    					}
    				}
                	if(ibyte > maxByte){
                		value = value.substr(0, clen);
                		ctrl.$setViewValue(value);
                        ctrl.$render();
                        if(attrs.maxByteAlert && check){
                            check = false;
                        	$scope.alert.pop({message:attrs.maxByte + attrs.maxByteAlert, callback:getFocus});
                        }
                		return value;
                	}else{
                		sup = value.length;
                		return value;
                	}
                    return value;
                });
			}
	    };
	}]);
	app.directive('myEnter', function () {
	    return function ($scope, el, attrs) {
	    	el.on('keydown keypress', function (event) {
	            if(event.which === 13) {
	                $scope.$apply(function (){
	                    $scope.$eval(attrs.myEnter);
	                });
	                el.blur();
	                event.preventDefault();
	            }
	        });
	    };
	});

	app.directive('myDir', ['$parse', function ($parse) {
	    return {
	        restrict: 'EA',
	        scope: true,
	        link: function (scope, elem, attrs) {

	        }
	    };
	}]);

	app.directive('kaisaCaptcha',['$parse',function($parse){
		return {
			link : function($scope, el, attrs, ctrl) {
				if(!attrs.ngModel) {return;}
				$scope[attrs.ngModel] = {
					code : null,
					refresh : function(){
						var a = Math.floor((Math.random() * 10)),
							b = Math.floor((Math.random() * 10)),
							c = Math.floor((Math.random() * 10)),
							d = Math.floor((Math.random() * 10)),
							e = Math.floor((Math.random() * 10)),
							f = Math.floor((Math.random() * 10));
						var html = '<div class="through" style="transform:rotate('+a+'deg);"></div><div class="through" style="transform:rotate(-'+c+'deg);"></div><ol><li class="lan'+a+'">'+a+'</li><li class="lan'+b+'">'+b+'</li><li class="lan'+c+'">'+c+'</li class="lan'+d+'"><li>'+d+'</li><li class="lan'+e+'">'+e+'</li><li class="lan'+f+'">'+f+'</li></ol>';
						this.code = ''+a+''+b+''+c+''+d+''+e+''+f;
						el.html('').html(html);
					}
				};
				$scope[attrs.ngModel].refresh();
			}
		};
	}]);
})(window, window.angular);