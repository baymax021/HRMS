package com.bay.service;

import com.bay.model.Candidate;

/**
 *
 * @author baymax
 * @date 2017/10/26
 * No cross no  crown.
 */
public interface CandidateService {
    boolean candidateRegister(Candidate candidate);
    Candidate candidateLogin(Candidate candidate);
}
