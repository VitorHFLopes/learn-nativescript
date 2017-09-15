"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.submit = function () {
        console.log('hello');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n        <StackLayout>\n\n            <Image src=\"res://logo_login\" stretch=\"none\" horizontalAlignment=\"center\"></Image>\n            \n            <TextField hint=\"Email Address\" keyboardType=\"email\"\n                       autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n            <TextField hint=\"Password\" secure=\"true\"></TextField>\n\n            <Button text=\"Sign in\" class=\"submit-button\" (tap)=\"submit()\"></Button>\n            <Button text=\"Sign up for Groceries\"></Button>\n        </StackLayout>\n    ",
        styleUrls: ['pages/login/login-common.css', 'pages/login/login.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFtQjFDLElBQWEsWUFBWTtJQUF6QjtJQU1BLENBQUM7SUFKRyw2QkFBTSxHQUFOO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLFlBQVk7SUFqQnhCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsZ2pCQVlUO1FBQ0QsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7S0FDdkUsQ0FBQztHQUNXLFlBQVksQ0FNeEI7QUFOWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPFN0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwicmVzOi8vbG9nb19sb2dpblwiIHN0cmV0Y2g9XCJub25lXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cImNlbnRlclwiPjwvSW1hZ2U+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxUZXh0RmllbGQgaGludD1cIkVtYWlsIEFkZHJlc3NcIiBrZXlib2FyZFR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb3JyZWN0PVwiZmFsc2VcIiBhdXRvY2FwaXRhbGl6YXRpb25UeXBlPVwibm9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCI+PC9UZXh0RmllbGQ+XG5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlNpZ24gaW5cIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTaWduIHVwIGZvciBHcm9jZXJpZXNcIj48L0J1dHRvbj5cbiAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICBgLFxuICAgIHN0eWxlVXJsczogWydwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzJywgJ3BhZ2VzL2xvZ2luL2xvZ2luLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICB9XG59Il19