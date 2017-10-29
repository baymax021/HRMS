package com.bay.dao;

import com.bay.model.Candidate;

/**
 * Created by baymax on 2017/10/26.
 * No cross no  crown.
 */
public interface CandidateDao {
    boolean addCandidate(Candidate candidate);
    Candidate queryCandidate(Candidate candidate);
}
