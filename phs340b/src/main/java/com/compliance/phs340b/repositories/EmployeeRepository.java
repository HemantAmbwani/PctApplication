package com.compliance.phs340b.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.compliance.phs340b.dao.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {}

