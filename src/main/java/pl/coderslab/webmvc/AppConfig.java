package pl.coderslab.webmvc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import pl.coderslab.webmvc.model.Book;

@Configuration
@EnableWebMvc
@ComponentScan()
public class AppConfig {

}
