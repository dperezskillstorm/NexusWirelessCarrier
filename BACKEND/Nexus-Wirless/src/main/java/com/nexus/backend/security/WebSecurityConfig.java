package com.nexus.backend.security;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity

public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
@Autowired
DataSource dataSource;

@Autowired
public void configAuthentication(AuthenticationManagerBuilder auth) throws Exception {
    auth.jdbcAuthentication()
   // .passwordEncoder(getPasswordEncoder())
    .dataSource(dataSource);
    }
//Commented out the password encoder its giving me errors.
// 7/20/22 Security verifies role and password based on user name, and restricts acess

//@Autowired
//public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
//  auth.inMemoryAuthentication()
//      .withUser("admin")
//      .password("password")
//      .authorities("USER");
//}
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    
    	http
    	.authorizeRequests()
    	.antMatchers("/api/v1/users/**")
    	.hasRole("ADMIN")
    	.antMatchers("/api/v1/user_devices/**")
    	.hasRole("USER")
    	.antMatchers("/api/v1/user_plans/**")
    	.hasRole("USER")
    	.antMatchers("/api/v1/user/**")
    	.hasAnyRole("USER","ADMIN")
    	.antMatchers("/**")
    	.permitAll()
    	.anyRequest()
    	.authenticated()
    	.and()
    	.httpBasic();
    
     
          
          
        
    }
    
    @Bean
    public PasswordEncoder getPasswordEncoder() {
    	return NoOpPasswordEncoder.getInstance();
    }

//@Override
//	public UserDetailsService userDetailsServiceBean() {
//		InMemoryUserDetailsManager manager = new InMemoryUserDetailsManager();
//		manager.createUser(User.withUsername("admin").password("admin").roles("ADMIN").build());
//		return manager;
//}
	
	
	
}