
package com.kds.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kds.service.*;
import com.kds.models.Orders;
import com.kds.models.*;
@RestController

@CrossOrigin(origins="*",allowedHeaders="*")
public class UserController {

    @Autowired
    private UserService Service;

    @GetMapping("/getAllStaffs")
    public List<User> getAllStaffs() {
        return Service.getAllStaff();
    }
    
    @GetMapping("/getAllOrders")
    public List<Orders> getAllOrder() {
        return Service.getAllOrder();
    }
    
    
    @PostMapping("/dash/neworder")
    
    public Orders addOrder(@RequestBody Orders ord)
    
    {
    	return Service.createOrder(ord);
    }
    
    
    @PostMapping("/auth/signup")
    public String addStaff(@RequestBody User f) {
        return Service.SignUpx(f);
    }
    @PostMapping("/auth/login")
	private String Login(@RequestBody Map<String, String> Loginx) {
	    String email = Loginx.get("email");
	    String password = Loginx.get("pwd");
	    String result = Service.Loginx(email, password);
	    return result;
	}
 

    @DeleteMapping("/{id}")
    public String deleteStaff(@PathVariable int id) {
        return (Service.deleteStaff(id)) ? "User deleted successfully" : "User Not Found";
    }
    
    @DeleteMapping("/delOrder/{Ord_id}")

	public String deletedetails(@PathVariable("Ord_id") int Ord_id)

	{

	return Service.deleteOrderById(Ord_id);

	}
    
    //get Role
    
    @PostMapping("/auth/login/role")
    public String getRole(@RequestBody Map<String, String> Rolex) {
    	String email = Rolex.get("email");
    	System.out.print(email);
        return Service.getRolex(email);
    }
    

}