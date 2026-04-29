import { useState } from 'react';

const Builder = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const [resume, setResume] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "9876543210",
    summary: "Hardworking first year student learning web development.",
    experience: [] as any[],
    skills: ["HTML", "CSS", "JavaScript"]
  });

  const [newExp, setNewExp] = useState({ company: "", role: "", duration: "", description: "" });
  const [newSkill, setNewSkill] = useState("");

  const handlePersonalChange = (e: any) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    if (newExp.company && newExp.role) {
      setResume({ ...resume, experience: [...resume.experience, newExp] });
      setNewExp({ company: "", role: "", duration: "", description: "" });
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setResume({ ...resume, skills: [...resume.skills, newSkill.trim()] });
      setNewSkill("");
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <h1>My Resume Builder</h1>
        <p>Simple Project for First Year Assignment</p>
      </div>

      {/* Tabs Navigation */}
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Info
        </div>
        <div 
          className={`tab ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          Summary
        </div>
        <div 
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </div>
        <div 
          className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </div>
        <div 
          className={`tab ${activeTab === 'preview' ? 'active' : ''}`}
          onClick={() => setActiveTab('preview')}
        >
          Preview
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>

        {/* Form Area */}
        <div>
          {activeTab === 'personal' && (
            <div className="card">
              <h2>Personal Information</h2>
              <input 
                type="text" 
                name="name" 
                value={resume.name} 
                onChange={handlePersonalChange} 
                placeholder="Full Name" 
              />
              <input 
                type="email" 
                name="email" 
                value={resume.email} 
                onChange={handlePersonalChange} 
                placeholder="Email Address" 
              />
              <input 
                type="text" 
                name="phone" 
                value={resume.phone} 
                onChange={handlePersonalChange} 
                placeholder="Phone Number" 
              />
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="card">
              <h2>Professional Summary</h2>
              <textarea 
                name="summary" 
                value={resume.summary} 
                onChange={handlePersonalChange}
                rows={6}
                placeholder="Write a short summary about yourself..."
              />
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="card">
              <h2>Add Experience</h2>
              <input 
                type="text" 
                placeholder="Company Name" 
                value={newExp.company}
                onChange={(e) => setNewExp({...newExp, company: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Job Role" 
                value={newExp.role}
                onChange={(e) => setNewExp({...newExp, role: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Duration (e.g. 2024 - Present)" 
                value={newExp.duration}
                onChange={(e) => setNewExp({...newExp, duration: e.target.value})}
              />
              <textarea 
                placeholder="Job Description" 
                value={newExp.description}
                onChange={(e) => setNewExp({...newExp, description: e.target.value})}
                rows={4}
              />
              <button className="btn" onClick={addExperience}>Add Experience</button>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="card">
              <h2>Add Skills</h2>
              <input 
                type="text" 
                placeholder="Enter skill (e.g. Python, React)" 
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button className="btn" onClick={addSkill}>Add Skill</button>

              <div style={{ marginTop: '20px' }}>
                {resume.skills.map((skill, i) => (
                  <span key={i} className="skill">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Live Preview */}
        <div>
          <div className="preview">
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>{resume.name}</h1>
            <p style={{ textAlign: 'center', color: '#475569', marginBottom: '25px' }}>
              {resume.email} | {resume.phone}
            </p>

            <h2>Summary</h2>
            <p>{resume.summary}</p>

            {resume.experience.length > 0 && (
              <>
                <h2 style={{ marginTop: '30px' }}>Experience</h2>
                {resume.experience.map((exp, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <h3>{exp.role}</h3>
                    <p style={{ color: '#64748b' }}>{exp.company} — {exp.duration}</p>
                    {exp.description && <p>{exp.description}</p>}
                  </div>
                ))}
              </>
            )}

            {resume.skills.length > 0 && (
              <>
                <h2 style={{ marginTop: '30px' }}>Skills</h2>
                <div>
                  {resume.skills.map((skill, i) => (
                    <span key={i} className="skill">{skill}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builder;