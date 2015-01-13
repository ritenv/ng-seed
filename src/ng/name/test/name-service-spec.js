define(
  [
    'angular-mocks',
    'ng/app',
    'ng/name/name-service'
  ],
  function() {
    describe('NameService', function() {

      beforeEach(module('ng-seed'));

      var NameService;
      beforeEach(inject(function (_NameService_) {
        NameService = _NameService_;
      }));

      describe('#formatName()', function() {
        it('should title case a given string', function() {
          expect(NameService.formatName('John')).to.equal('John');
          expect(NameService.formatName('john doe')).to.equal('John Doe');
        });
      });

    });
  }
);
