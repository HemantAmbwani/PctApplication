package com.compliance.phs340b;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.compliance.phs340b.repositories.EmployeeRepository;

@SpringBootTest
class Phs340bApplicationTests {

	@MockBean
	private EmployeeRepository employeeRepository;

	@Test
	void contextLoads() {
	}

}
