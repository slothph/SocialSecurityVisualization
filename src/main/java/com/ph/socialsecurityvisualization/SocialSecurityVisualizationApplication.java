package com.ph.socialsecurityvisualization;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author hao.peng01@hand-china.com 2021/3/11 17:43
 */
@SpringBootApplication
@MapperScan("com.ph.socialsecurityvisualization.mapper")
public class SocialSecurityVisualizationApplication {

    public static void main(String[] args) {
        SpringApplication.run(SocialSecurityVisualizationApplication.class, args);
    }

}
